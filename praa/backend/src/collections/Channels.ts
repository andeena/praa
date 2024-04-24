import { CollectionConfig } from 'payload/types'

const Channels: CollectionConfig = {
  slug: 'channels',
  
  fields: [
    {
        name: "channelName",
        label: "Channel Name",
        type: "text",
        required: true
    },
    {
        name: "member",
        label: "Member",
        type: "relationship",
        relationTo: "users",
        hasMany: true
    },
    {
        name: "message",
        label: "Message",
        type: "relationship",
        relationTo: "messages",
        hasMany: true
    }
  ],
}

export default Channels
