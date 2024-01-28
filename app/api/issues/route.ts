import { NextRequest, NextResponse } from "next/server";
import prisma from '@/prisma/db'
import { z } from 'zod'
const createIssueSchema = z.object({
    title: z.string().min(1).max(255),
    description: z.string().min(1)
})
export async function POST(req: NextRequest) {
    const body = await req.json()
    const validation = createIssueSchema.safeParse(body)
    if (!validation.success) {
        return NextResponse.json(validation.error.errors, { status: 400 })

    }

    const newIssue = await prisma.issue.create({ data: { title: body.title, description: body.description } })
    return NextResponse.json(newIssue, { status: 201 })




}



export async function GET(req: NextRequest) {
    const issues = await prisma.issue.findMany()
    return NextResponse.json(issues, { status: 200 })
}