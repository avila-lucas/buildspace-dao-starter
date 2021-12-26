import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";

const tokenModule = sdk.getTokenModule(
    "0x2eD0AAF9DdAB620861Db085CEE07Ae2b4C2e67ad",
);

(async () => {
    try {
        const amount = 3_000_000;
        const amountWith18Decimals = ethers.utils.parseUnits(amount.toString(), 18);
        await tokenModule.mint(amountWith18Decimals);
        const totalSupply = await tokenModule.totalSupply();

        console.log(
            "✅ There now is",
            ethers.utils.formatUnits(totalSupply, 18),
            "$UNIVERSITY in circulation",
        );
    } catch (error) {
        console.error("Failed to print money", error);
    }
})();