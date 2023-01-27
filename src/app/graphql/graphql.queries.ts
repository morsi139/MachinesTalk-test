import {gql} from 'apollo-angular';
const launches= gql `
query{
    launches{
        id
    mission_name
    links {
      flickr_images
      mission_patch_small
    }
    rocket {
      rocket_name
    }
    launch_date_utc

    }
}`;
export {launches}
