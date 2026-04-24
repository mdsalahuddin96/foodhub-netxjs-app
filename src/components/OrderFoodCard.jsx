import { Button, Card } from "@heroui/react";
import Image from "next/image";

const OrderFoodCard = ({item}) => {
    const { dish_name, category, rating, price, image_link } = item;
    return (
        <Card className="w-full items-stretch md:flex-row">
          <div className="relative h-[140px] w-full shrink-0 overflow-hidden rounded-2xl sm:h-[120px] sm:w-[120px]">
            <Image
            src={image_link}
            alt={dish_name}
            width={200}
            height={200}
            />
          </div>
          <div className="flex flex-1 flex-col gap-3">
            <Card.Header className="gap-1">
              <Card.Title className="pr-8">{dish_name}!</Card.Title>
              
              {/* <CloseButton
                aria-label="Close banner"
                className="absolute top-3 right-3"
              /> */}
            </Card.Header>
            <Card.Footer className="mt-auto flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-col">
                <span className="text-sm font-medium text-foreground">
                  ${price}
                </span>
                {/* <span className="text-xs text-muted">
                  Submission ends Oct 10.
                </span> */}
              </div>
              {/* <Button className="w-full sm:w-auto">Apply Now</Button> */}
            </Card.Footer>
          </div>
        </Card>
    );
};

export default OrderFoodCard;