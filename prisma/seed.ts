import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Creating a new user
  const user = await prisma.user.create({
    data: {
      name: 'admin',
      email: 'moneyplan@admin.com',
      password: '123456',
      role: 'admin',
      status: 'active'
    },
  });
  console.log(`User created: ${user.name}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
