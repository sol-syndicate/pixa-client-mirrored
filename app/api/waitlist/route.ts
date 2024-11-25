import { WaitListService } from '@/lib/services/waitlist.srevice'

type WaitlistPayload = {
  name: string
  email: string
}

export const POST = async (req: Request) => {
  try {
    const body = (await req.json()) as WaitlistPayload

    if (
      !body.name ||
      typeof body.name !== 'string' ||
      body.name.trim().length < 2
    ) {
      return Response.json({ error: 'Invalid name' }, { status: 400 })
    }

    if (!body.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
      return Response.json({ error: 'Invalid email' }, { status: 400 })
    }

    return Response.json({ message: 'Success', data: body })
  } catch (error: any) {
    return Response.json(
      { error: error?.message || 'something went wrong' },
      { status: 400 }
    )
  }
}

export const GET = async (req: Request) => {
  try {
    const waitlist = await WaitListService.getWaitList()
    return Response.json(waitlist)
  } catch (error: any) {
    return Response.json(
      { error: error?.message || 'something went wrong' },
      { status: 400 }
    )
  }
}
