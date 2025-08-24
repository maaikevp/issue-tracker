import authOptions from "@/app/auth/authOptions";
import { patchIssueSchema } from "@/app/validationSchemas";
import { prisma} from "@/prisma/client";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

// If you need to provide a Promise:
__param_type__: { params: Promise<{ id: string }> }

// Or, if you want to accept an object, update your type constraint:
type ParamCheck<T> = {
  __param_type__: { params: { id: string } }
  // ...other fields...
}

interface Props {
  params: Promise<{ id: string }>;
}

export async function PATCH(request: NextRequest, props: { params: Promise<{ id: string }>}) {
  const params = await props.params;

  const session = await getServerSession(authOptions);
  if (!session) 
      return NextResponse.json({}, { status: 401 });

  const body = await request.json();
  const validation = patchIssueSchema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400 });

  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) }
  });

  const { assignedToUserId, title, description } = body;

  if (assignedToUserId) {
    const user = await prisma.user.findUnique({
      where: { id: assignedToUserId },
    });

  if (!user)
      return NextResponse.json(
        { error: "Invalid user." },
        { status: 400 }
      );
  }

  if (!issue)
    return NextResponse.json({ error: 'Invalid issue' }, { status: 404 });

  const updatedIssue = await prisma.issue.update({
    where: { id: issue.id },
    data: {
      title,
      description,
      assignedToUserId
    }
  });
  return NextResponse.json(updatedIssue);
}



export async function DELETE(request: NextRequest, props: { params: Promise<{ id: string }>}) {
    const params = await props.params;

    console.log("paramsroute:" , params);

    const session = await getServerSession(authOptions);
    if (!session) 
        return NextResponse.json({}, { status: 401 });

  

    const issue = await prisma.issue.findUnique({
      where: { id: parseInt(params.id) }
    });

   
    if (!issue)
      return NextResponse.json({ error: 'Invalid issue' }, { status: 404 });

    await prisma.issue.delete({
      where: { id: issue.id }
  });

  return NextResponse.json({});
  
    // return NextResponse.json({ message: 'Issue deleted successfully' });
  }





  
// export async function DELETE(
//   request: NextRequest, 
//   { params }: { params: Props}) {

//     const session = await getServerSession(authOptions);
//     if (!session) 
//         return NextResponse.json({}, { status: 401 }); 

//   const issue = await prisma.issue.findUnique({
//       where: { id: parseInt(params.id) }
//     });


//     if (!issue)
//       return NextResponse.json({ error: 'Invalid issue' }, { status: 404 });

//     await prisma.issue.delete({
//       where: { id: issue.id }
//   });

//   return NextResponse.json({ message: 'Issue deleted successfully' });
//   }