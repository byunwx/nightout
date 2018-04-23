import gql from 'graphql-tag'
import {Mutation} from 'react-apollo'
import {CREATE_ITINERARY} from './queries'

const createItinerary = (name, date, time, activities) => {
    return (
        <Mutation mutation={CREATE_ITINERARY} variables={{ name, date, time, activities }}>
        {({ loading, error, data }) => {
            if (loading){console.log('loading')}
            if (error){console.log(error)}
            console.log(data)
        }}
        </Mutation>
    )
}

export default createItinerary