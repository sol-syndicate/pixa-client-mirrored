import { WaitListService } from '@/lib/services/waitlist.service'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const GET = async (req: Request) => {
  try {
    const waitlist = await WaitListService.getWaitListCount()
    return Response.json({ count: waitlist })
  } catch (error: any) {
    return Response.json(
      { error: error?.message || 'something went wrong' },
      { status: 400 }
    )
  }
}
