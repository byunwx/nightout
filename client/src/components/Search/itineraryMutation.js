import gql from 'graphql-tag'
import {Mutation} from 'react-apollo'
import {CREATE_ITINERARY} from './queries'

const createItinerary = () => {
    return (
        <Mutation mutation={CREATE_ITINERARY}>
            {(createItinerary => (
            <div>
                <form
            onSubmit={e => {
              e.preventDefault();
            //   createItinerary();
            }}
                >

                </form>
            </div>
            ))}
        </Mutation>
    )
}

export default createItinerary