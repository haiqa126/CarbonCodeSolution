import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res:NextApiResponse) {
const prisma=new PrismaClient({log:["query"]})

try{

    const quiz= await prisma.quiz.findMany();
    res.status(200);
    res.json({quiz})

} catch(e){
    res.status(500);
    res.json({error: "Unable to fetch list of quizes"});

} 



}

    
