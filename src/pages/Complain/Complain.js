import React, {useEffect, useState} from "react";
import {
    Box,
    Card,
    CardBody,
    CardFooter,
    HStack,
    Kbd,
    SimpleGrid,
    useToast,
    Text,
} from "@chakra-ui/react";
import {FcGraduationCap} from "react-icons/fc";
import axios from "axios";

const Complain = () => {
    const toast = useToast();
    const id = "test";
    const complain = [
        {
            "_id": "1",
            "title": "Title of the Complaint 1",
            "body": "Detailed description of the complaint 1",
            "postedBy": {
                "name": "John",
                "surname": "Doe"
            },
            "createdAt": "2025-04-28T12:34:56Z"
        },
        {
            "_id": "2",
            "title": "Title of the Complaint 2",
            "body": "Detailed description of the complaint 2",
            "postedBy": {
                "name": "Jane",
                "surname": "Smith"
            },
            "createdAt": "2025-04-27T15:21:45Z"
        }
    ];

    return (
        <Box ml="225px" mt={"30px"}>
            <Card p="12px 5px" mb="12px" pl={"20px"}>
                <HStack direction={"column"}>
                    <Text fontSize="20px" fontWeight="bold">
                        <FcGraduationCap/>
                    </Text>
                    <Text fontSize="15px" fontWeight="bold">
                        Complaint
                    </Text>
                </HStack>
            </Card>
            <SimpleGrid
                spacing={4}
                templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
                ml={"30px"}
            >
                {complain &&
                    complain.posts &&
                    complain.posts.map((item) => (
                        <>
                            <Card key={item._id}>
                                {/* <CardHeader>
                  <Heading size="md"> {item.title}</Heading>
                </CardHeader> */}
                                <CardBody>
                                    <Text>{item.title}</Text>
                                    <Text>{item.body}</Text>
                                </CardBody>
                                <CardFooter>
                                    <Text>
                                        <Kbd> Гомдол гаргасан</Kbd> - {item.postedBy.name}{" "}
                                        {item.postedBy.surname}{" "}
                                        <Kbd>{item.createdAt.substr(0, 10)}</Kbd>
                                    </Text>
                                </CardFooter>
                            </Card>
                        </>
                    ))}
            </SimpleGrid>
        </Box>
    );
};

export default Complain;
