// prisma/seed.ts
import { PrismaClient } from '../src/generated/prisma';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

const classes = ['A', 'B', 'C', 'D', 'E'];

async function main() {
  console.log('🌱 Seeding database...');

  for (let i = 0; i < 200; i++) {
    const className = faker.helpers.arrayElement(classes);
    const rollNo = faker.number.int({ min: 1, max: 50 });

    try {
        await prisma.student.create({
            data: {
              registrationNo: `REG${i + 1000}`,
              name: faker.person.fullName(),
              class: className,
              rollNo,
              contactNumber: faker.string.numeric(10), // ✅ Fix here
              status: true,
            },
          });
          
    } catch (err) {
      console.warn(`⚠️ Skipping duplicate: Class ${className} RollNo ${rollNo}`);
    }
  }

  console.log('✅ Seeding complete.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
