// GameCard.tsx
import { Game } from "../hooks/useGames";
import { Card, CardBody, Image, Heading, HStack } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";

interface Props {
    game: Game;
}

const GameCard = ({ game }: Props) => {
    return (
        <Card
            width="300px"
            height="320px" // Set a fixed height
            borderRadius={10}
            overflow="hidden"
            boxSizing="border-box" // Use border-box for consistent sizing
        >
            <Image
                src={getCroppedImageUrl(game.background_image)}
                height="200px" // Set a fixed height for the image
                objectFit="cover" // Ensure the image covers the entire area
            />
            <CardBody>
                <Heading fontSize="2xl">{game.name}</Heading>
                <HStack justifyContent="space-between">
                    <PlatformIconList
                        platforms={game.parent_platforms.map((p) => p.platform)}
                    />
                    <CriticScore score={game.metacritic} />
                </HStack>
            </CardBody>
        </Card>
    );
};

export default GameCard;
