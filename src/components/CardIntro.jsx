import pkg from '@material-tailwind/react';
const { Card, CardHeader, CardBody, Typography, Avatar } = pkg;
export function BackgroundBlogCard() {
  return (
    <Card
      shadow={false}
      className="relative grid h-[36rem] w-full items-end justify-center overflow-hidden text-center"
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('/LOGO1.png')] bg-cover bg-center"
      >
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-pink-200/80 via-pink-100/50" />
      </CardHeader>
      <CardBody className="relative py-14 px-6 md:px-12">
        <Typography
          variant="h2"
          color="pink"
          className="mb-6 font-medium leading-[1.5]"
        >
        </Typography>
        <div className="flex">
          <div className="mr-3 flex align-middle justify-center flex-col">
            <Typography variant="h5" className="mb-4 text-gray-400">
              Sandra Mejia
            </Typography>
            <Avatar
              size="xxl"
              variant="circular"
              alt="Sandra Mejia"
              className="border-2 border-white"
              src="/sandra.jpg"
            />
          </div>
          <div className="flex align-middle justify-center flex-col">
          <Typography variant="h5" className="mb-4 text-gray-400">
            Jackeline Macas
          </Typography>
          <Avatar
            size="xxl"
            variant="circular"
            alt="Sandra Mejia"
            className="border-2 border-white"
            src="/jaky.jpg"
          />
          </div>
        </div>
      </CardBody>
    </Card>
  );
}