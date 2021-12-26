import sdk from "./1-initialize-sdk.js";

const appModule = sdk.getAppModule(
    "0xe9d0Fe02799332F64e37779208897d5374A3D401",
);

(async () => {
    try {
        const voteModule = await appModule.deployVoteModule({
            name: "UniversityDAO's Proposals",
            votingTokenAddress: "0x2eD0AAF9DdAB620861Db085CEE07Ae2b4C2e67ad",
            proposalStartWaitTimeInSeconds: 0,
            proposalVotingTimeInSeconds: 24 * 60 * 60,
            votingQuorumFraction: 0,
            minimumNumberOfTokensNeededToPropose: "0",
        });

        console.log(
            "✅ Successfully deployed vote module, address:",
            voteModule.address,
        );
    } catch (err) {
        console.log("Failed to deploy vote module", err);
    }
})();
