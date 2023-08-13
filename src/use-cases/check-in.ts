import { CheckIn } from '@prisma/client'
import { CheckInsRepository } from '@/repositories/check-ins-repository'

interface CheckInUseCaseRequest {
  userId: string
  guymId: string
}

interface CheckInUseCaseResponse {
  checkIn: CheckIn
}

export class CheckInUseCase {
  constructor(private checkInsRepository: CheckInsRepository) {}

  async execute({
    userId,
    guymId,
  }: CheckInUseCaseRequest): Promise<CheckInUseCaseResponse> {
    const checkIn = await this.checkInsRepository.create({
      gym_id: guymId,
      user_id: userId,
    })

    return {
      checkIn,
    }
  }
}
