import { apiResponse, httpRequest } from '../http.lib'

export const waitListRequests = {
  getWaitlist: async (setLoading?: (loading: boolean) => void) => {
    try {
      const res = await httpRequest(setLoading).get(`/waitlist`)

      return apiResponse(true, 'Waitlist fetched successfully.', res.data)
    } catch (err: any) {
      return apiResponse(
        false,
        err?.response?.data?.message || err?.message || 'Error occurred.',
        err
      )
    }
  },
  joinWaitlist: async (
    param: { name: string; email: string },
    setLoading?: (loading: boolean) => void
  ) => {
    try {
      const res = await httpRequest(setLoading).post(`/waitlist`, param)

      return apiResponse(true, 'Added to waitlist.', res.data)
    } catch (err: any) {
      return apiResponse(
        false,
        err?.response?.data?.message || err?.message || 'Error occurred.',
        err
      )
    }
  },
  getWaitListCount: async (setLoading?: (loading: boolean) => void) => {
    try {
      const res = await httpRequest(setLoading).get(`/waitlist/count`)
      return apiResponse(true, 'Waitlist count fetched successfully.', res.data)
    } catch (err: any) {
      return apiResponse(
        false,
        err?.response?.data?.message || err?.message || 'Error occurred.',
        err
      )
    }
  },
}
