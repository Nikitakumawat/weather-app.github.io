import { gql } from "@apollo/client";

export const GET_WEATHER_QUERY = gql`
query getCityByName($name: String!) {
    getCityByName(name: $name) {
      id
      name
      country
      coord{
        lon
        lat
      }
      weather{
        summary{
          title
          description
          icon
        }
        timestamp
        temperature{
          feelsLike
          min
          max
          actual
        }
        wind{
          speed
          deg
        }
        clouds{
          all
          visibility
          humidity
        }
      }
    }
}
`;