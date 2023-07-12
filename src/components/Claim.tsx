'use client'
import React, {useContext} from 'react';
import {Whal3sConnectKitButton} from "@whal3s/react-connectkit";
import "@whal3s/react-connectkit/lib/index.css"
import "@whal3s/react/lib/index.css"
import {Whal3sModalContext} from "@whal3s/react";
import {NftValidationUtility} from "@whal3s/whal3s.js";
import Form from "@/components/Form";
import Success from "@/components/Success";

const Claim = () => {
    const {state, dispatch} = useContext(Whal3sModalContext);

    return (
        <div
            className="space-y-12">

            <Whal3sConnectKitButton
                isClaimed={state.step >= NftValidationUtility.STEP_RESERVED}
                onClaim={() => {
                    dispatch({type: 'SET_OPEN', payload: true})
                }
                }/>

            {state.step >= NftValidationUtility.STEP_RESERVED
                && state.step < NftValidationUtility.STEP_CLAIMED
                &&  <Form/>}
            {state.step === NftValidationUtility.STEP_CLAIMED && <Success/>}

        </div>
    );
    1
};

export default Claim;
