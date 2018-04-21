// /*dependencies*/
// import React, {Component} from "react";
// import gql from "graphql-tag";
// import {graphql} from 'react-apollo';
// import {Query} from 'react-apollo'

// const GET_YELP_RESULT = gql `
// query yelpSearch($search: String  $location: String) {
//   yelpSearch(search: $search location: $location) {
//     name
//     location
//     url
//     price
//     phone
//   }
// }
// `

// // const YelpSearch = ({}) => (
// // <Query query={GET_YELP_RESULT} search={} location={}>
// // {({loading, error, data}) => {
// // if (loading)
// //       return <p>Loading...</p>;
// //     if (error)
// //       return <p>Error :(</p>;
// //     return
// //       .data
// //       .yelpSearch
// //       .map(({name, location, url, price, phone}) => (
// //         <div key={name}>
// //           <h6>
// //             <a className="x" href={`${url}`} target="_blank">{`${name}`}</a>
// //             {`${price}`}
// //           </h6>
// //           <p>
// //             {`${location}`}</p>
// //           <p>
// //             {`${phone} `}</p>
// //         </div>
// //       ))
// //     }
// // </Query>
// // )


// class YelpSearch extends Component {
//   render() {
//     if (this.props.data.loading)
//       return <p>Loading...</p>;
//     if (this.props.data.error)
//       return <p>Error :(</p>;
//     return this
//       .props
//       .data
//       .yelpSearch
//       .map(({name, location, url, price, phone}) => (
//         <div key={name}>
//           <h6>
//             <a className="x" href={`${url}`} target="_blank">{`${name}`}</a>
//             {`${price}`}
//           </h6>
//           <p>
//             {`${location}`}</p>
//           <p>
//             {`${phone} `}</p>
//         </div>
//       ));
//   }
// }

// const GET_YELP_RESULT = gql `
// query yelpSearch($search: String  $location: String) {
//   yelpSearch(search: $search location: $location) {
//     name
//     location
//     url
//     price
//     phone
//   }
// }
// `

// export default graphql(GET_YELP_RESULT, {
//   options: ({search, location}) => ({
//     variables: {
//       search,
//       location
//     }
//   })
// })(YelpSearch);

// export default YelpSearch