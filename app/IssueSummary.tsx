import { Status } from '@prisma/client'
import { Card, Flex, Link, Text } from '@radix-ui/themes'

interface Props {
    open: number,
    inProgress: number,
    closed: number, 
}



const IssueSummary = ({open, inProgress, closed}: Props) => {
    const containers :
    {   label: string,
        value: number, 
        status: Status}[] =  [
        { label: 'Open issues', value: open, status: 'OPEN' },
        { label: 'In Progress issues', value: inProgress, status: 'IN_PROGRESS' },
        { label: 'Closed issues', value: closed, status: 'CLOSED' },
    ]

console.log("Fetched issues -open:",  open);
console.log("Fetched issues -inprogress:",  inProgress);
console.log("Fetched issues -closed:",  closed);

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
