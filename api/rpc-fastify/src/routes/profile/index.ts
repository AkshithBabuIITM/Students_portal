import { FastifyPluginAsync, FastifyRequest } from "fastify"

const profiles: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get('/byName/:name', async function (request: ParamRequest, reply) {
		let res = await fastify.prisma.student.findMany({where: {name: {startsWith: request.params.name}}, orderBy: {name: 'asc'}})
		// if(res.length === 0){
		// 	res = await fastify.prisma.student.findMany({where: {name: {contains: request.params.name}}})
		// }
    return res
  })
  fastify.get('/byRollNo/:rollno', async function (request: ParamRequest, reply) {
		let res = await fastify.prisma.student.findMany({where: {rollNo: {startsWith: request.params.rollno}}, orderBy: {rollNo: 'asc'}})
    return res
  })
}

type ParamRequest = FastifyRequest<{
	Params: {name: string, rollno: string}
}>

export default profiles