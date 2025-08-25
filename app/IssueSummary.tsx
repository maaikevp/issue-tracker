import { Status } from '@prisma/client'
import { Card, Flex, Link, Text } from '@radix-ui/themes'


interface Props {
    open_issue: number,
    inProgress_issue: number,
    closed_issue: number, 
}

const IssueSummary = ({open_issue, inProgress_issue, closed_issue}: Props) => {
    

    const containers :
    {   label: string,
        value: number, 
        status: Status}[] =  [
        { label: 'Open issues', value: open_issue, status: 'OPEN' },
        { label: 'In Progress issues', value: inProgress_issue, status: 'IN_PROGRESS' },
        { label: 'Closed issues', value: closed_issue, status: 'CLOSED' },
    ]

console.log("Fetched issues -open:",  open_issue);
console.log("Fetched issues -inprogress:",  inProgress_issue);
console.log("Fetched issues -closed:",  closed_issue);

   
   

  return ( 
    <Flex gap="2"  mb="5">
        {containers.map((container) => (
        <Card key={container.label}>            
            <Flex direction="column">
                <Link href={`/issues?status=${container.status}`} className='text-sm font-medium'>{container.label} </Link>
                <Text size="5" className='font-bold'>{container.value}</Text>                
            </Flex>
        </Card>))}
     </Flex>
  );
};

export default IssueSummary
