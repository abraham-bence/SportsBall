import { PrismaClient } from "@prisma/client"
import {faker} from "@faker-js/faker"
import { connect } from "http2"

const prisma = new PrismaClient()


async function main() {

    for (let i = 0; i < 10; i++) {
        const team = await prisma.team.create({
            data: {
                country : faker.location.country()
            }
        })
        
    }
    for (let i = 0; i < 30; i++) {
        const player = await prisma.player.create({
            data: {
                name: faker.person.fullName(),
                goalCount: faker.number.int({min: 0, max: 800}),
                birthDate: faker.date.birthdate(),
                team: {connect: {id: faker.number.int({min: 1, max: 10})}}
            }
        })
    }
}


main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })