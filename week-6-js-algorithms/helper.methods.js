class Helpers {
    filterMatchesByLocationAndStatus(response) {
        return response.matches
            .filter(match => match.locationlvl1 === "Germany" && match.status === "canceled")
            .map(match => match.matchId);
    }

    filterMatchesByCoatingAndShower(response) {
        return response.matches
            .filter(match => match.matchInfo.coating === "Main.artificialGrass" && match.matchInfo.isShower === true)
            .map(match => match.matchId);
    }

    filterMatchesByLocationAndPrice(response) {
        return response.matches
            .filter(match => match.locationlvl2 === "Berlin" && match.price > 0)
            .map(match => match.matchId);
    }

    filterMatchesByCreatorFeeAndStatus(response) {
        return response.matches
            .filter(match => match.creatorFeePerPlayer > 3 && match.status === "canceled")
            .map(match => match.matchId);
    }

    filterMatchesByCoveringAndDressingRoom(response) {
        return response.matches
            .filter(match => match.matchInfo.covering === "Main.onTheStreet" && match.matchInfo.isDressingRoom === true)
            .map(match => match.matchId);
    }
}

export default new Helpers();