// import pkg from "@prisma/client";
// export var client = new pkg.PrismaClient();
import pkg from "@prisma/client";
import { readFile } from 'fs/promises';

export var client = new pkg.PrismaClient();


async function main() {
  const Students = JSON.parse(
    await readFile(
      new URL('./app_db.json', import.meta.url)
    )
  );

  const filteredStudents = Students.filter((value, index) => {
    return index < 10;
  });

  console.log(filteredStudents);

  await client.student.createMany({
        data: filteredStudents
        .map((student) => {
          return {
            rollNo : student.username,
            name : student.fullname,
            gender : student.gender == 'M' ? 'MALE' : 'FEMALE',
          }
        })
  });
    
    console.log("Done");
}

main();