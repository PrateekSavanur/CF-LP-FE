import { readContract } from "@wagmi/core"
import abi from "../Web3Helpers/ABI"
import { config } from "../Web3Helpers/wagmi"

export const getAllProjects: any = () => {
    const result = readContract(config, {
        abi,
        address: "0x64d669396464227E00653E2235272a0Ba6A67843",
        functionName: "getProjectCount"
    })

    console.log(result);

}