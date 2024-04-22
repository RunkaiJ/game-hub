import { Card } from "@chakra-ui/react";
import { ReactNode } from "react";
function GameCardContainer({ children }: { children: ReactNode }) {
    return (
        <Card height="320px" borderRadius={10} overflow="hidden">
            {children}
        </Card>
    );
}

export default GameCardContainer;
