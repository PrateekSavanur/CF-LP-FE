import { readContract, writeContract } from "@wagmi/core"
import abi from "../Web3Helpers/ABI"
import { config } from "../Web3Helpers/wagmi"
import { parseEther } from "viem"
import { toast } from "react-toastify"


interface Project {
    id: number,
    title: string,
    description: string,
    tokenAddress: string,
    liquidityPoolAddress: string,
    ethRaised: BigInt,
    owner: string,
    totalSupply: BigInt,
    imageUrl: string
}

type chainId = 1 | 11155111

export const getAllProjects: any = async (chainId: chainId) => {
    const result = await readContract(config, {
        abi,
        address: "0x64d669396464227E00653E2235272a0Ba6A67843",
        functionName: "getProjectCount",
        chainId: chainId
    }) as BigInt

    let projects = []

    for (let i = 0; i < Number(result); i++) {
        const projectIndividual = await readContract(config, {
            abi,
            address: "0x64d669396464227E00653E2235272a0Ba6A67843",
            functionName: "projects",
            args: [i],
            chainId: chainId
        }) as unknown

        const projectArray = projectIndividual as any[]

        const formatedProject: Project = {
            id: i,
            title: projectArray[0],
            description: projectArray[1],
            tokenAddress: projectArray[2],
            liquidityPoolAddress: projectArray[3],
            ethRaised: projectArray[4],
            owner: projectArray[5],
            totalSupply: projectArray[6],
            imageUrl: projectArray[7]
        }

        projects.push(formatedProject)
    }

    console.log(projects);

    return projects

}

export const withdrawFunds = async (selectedprojectId: number) => {
    try {
        await writeContract(config, {
            abi,
            address: "0x64d669396464227E00653E2235272a0Ba6A67843",
            functionName: "withdrawFunds",
            args: [selectedprojectId]
        });

    } catch (error) {
        toast.error("An error occurred during the transaction.");
    }
}

export const contribute = async (
    selectedprojectId: number,
    contributionAmount: string,

) => {
    try {
        await writeContract(config, {
            abi: abi,
            address: "0x64d669396464227E00653E2235272a0Ba6A67843",
            functionName: "contribute",
            args: [selectedprojectId],
            value: parseEther(contributionAmount),
        });

    } catch (error) {
        toast.error("An error occurred during the transaction.");
        console.error(error);
    }
};

export const swap = async () => {
    try {
        await writeContract(config, {
            abi: abi,
            address: "0x64d669396464227E00653E2235272a0Ba6A67843",
            functionName: "swapTokensForETH",
            args: [],
        })
    } catch (error) {

    }
}