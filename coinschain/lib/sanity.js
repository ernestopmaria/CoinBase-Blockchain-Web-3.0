import sanityClient from '@sanity/client'

export const client = sanityClient({
    projectId:"eja11on2",
    dataset:"production",
    apiVersion:"2021-03-25",
    token:"sk6KBnxPBgSu3VXGYLH8PCDGz77Sp4hgKDxPiTe7dg0miMWCsUqfRoIkX2Hf8bLlxP2N9TBud9bDQ42gphT46Womf28qRgEQ2v96S5bXkYws0C2RsY9q7oIUF6qE9dS5znygFZMQADLDsk7ErjDqLY2XibwiObVTmWb7MSApSzpKqZXRoSL0",
    useCdn:false,
    
})