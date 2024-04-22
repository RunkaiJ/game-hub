// GameCardSkeleton.tsx
import { CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
    return (
        <>
            <Skeleton height="200px">
                <CardBody>
                    <SkeletonText noOfLines={1} spacing="3" />
                    <SkeletonText noOfLines={1} spacing="3" />
                </CardBody>
            </Skeleton>
        </>
    );
};

export default GameCardSkeleton;
