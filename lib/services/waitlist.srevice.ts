import { nanoid } from 'nanoid'
import { apiResponse } from '../api.helpers'
import { supabaseClient } from '../superbase_client.util'

export class WaitListService {
  static async joinWaitlist(payload: { name: string; email: string }) {
    try {
      const getWaitList = await supabaseClient
        .from('waitlist')
        .select('*')
        .eq('email', payload.email)

      if (getWaitList.error)
        return apiResponse(
          false,
          'user details',
          getWaitList?.error?.message || 'something went wrong'
        )
      if (getWaitList.data[0])
        return apiResponse(false, 'user already on waitlist', undefined)

      const { data: waitlist, error } = await supabaseClient
        .from('blink')
        .insert({ id: nanoid(21), ...payload })
        .select()

      if (error)
        return apiResponse(false, 'failed to save blink', error.message)

      return apiResponse(true, 'blink information', waitlist![0])
    } catch (error: any) {
      console.log(`joinWaitlist :`, error.message)
      return apiResponse(
        false,
        'failed joining waitlist',
        error.message || 'An unknown error occurred'
      )
    }
  }
  static async getWaitList() {
    try {
      const { data, error } = await supabaseClient.from('waitlist').select('*')
      if (error)
        return apiResponse(false, 'failed to get waitlist', error.message)
      return apiResponse(true, 'waitlist', data)
    } catch (error: any) {
      console.log(`joinWaitlist :`, error.message)
      return apiResponse(
        false,
        'failed joining waitlist',
        error.message || 'An unknown error occurred'
      )
    }
  }
}
