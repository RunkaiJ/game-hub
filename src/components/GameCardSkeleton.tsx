// GameCardSkeleton.tsx
import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
    return (
        <Card
            width="300px"
            height="320px" // Match the height of the GameCard
            borderRadius={10}
            overflow="hidden"
            boxSizing="border-box" // Use border-box for consistent sizing
        >
            <Skeleton height="200px">
                {" "}
                {/* Match the height of the image */}
                <CardBody>
                    <SkeletonText noOfLines={1} spacing="4" />
                    <SkeletonText noOfLines={1} spacing="4" />
                </CardBody>
            </Skeleton>
        </Card>
    );
};

export default GameCardSkeleton;
