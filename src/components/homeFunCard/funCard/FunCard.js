import React from 'react';

import "./FunCard.css";
import {UnorderedList} from "../../functionalComponents/UnorderedList";
import {ListItemFunCard} from "../../functionalComponents/ListItemFunCard";


function FunCard() {

    return (
        <section className="funcards-wrapper">
            <UnorderedList>
                <ListItemFunCard
                    step="Step 1"
                    description="Start cooking without any desire to do so."
                    className="background-image"
                />
                <ListItemFunCard
                    step="Step 2"
                    description="Spend lots of time desperately trying to impress your loved ones."
                    className="background-image two"
                />

                <ListItemFunCard
                    step="Step 3"
                    description="You start your search engine and ask Google what you should do.
                            And... Oh miracle! Recipify is here to help you!"
                    className="background-image three"
                />
                <ListItemFunCard
                    step="Step 4"
                    description="You happily enjoy the meal with your family and friends,
                            while your nerve cells are thanking you."
                    className="background-image four"
                />
            </UnorderedList>
        </section>
    )
}

export default FunCard;