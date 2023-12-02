import pkg from '@material-tailwind/react';
const { Card, CardHeader, CardBody, Typography } = pkg
import { fade } from "astro:transitions";
interface TratamientoProps {
  price: string;
  title: string;
  image: string;
  description?: string;
}

export function Tratamiento({price, title, image, description}: TratamientoProps) {
  return (
    <Card className="w-96 m-5  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-11 duration-300">
      <CardHeader shadow={false} floated={false} className="h-96">
        <img
          src={image}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium">
            {title}
          </Typography>
          <Typography color="blue-gray" className="font-medium">
            {price}
          </Typography>
        </div>
        {
          description && (
            <Typography color="blue-gray" className="text-sm">
              {description}
            </Typography>
          )
        }
      </CardBody>
    </Card>
  );
}