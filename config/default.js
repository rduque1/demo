
module.exports = {
  app: {
    port: process.env.PORT || 8080
  },
  aws: {
    key: process.env.AWS_KEY,
    secret: process.env.AWS_SECRET,
    bucket: process.env.S3_BUCKET || 'temp-lifebit',
    region: process.env.AWS_REGION || 'eu-west-1',
  },
  lifebit: {
    workflow: '5bd2139f109dc900a34cdb0a',
    project: '5bd2149e109dc900a34cdb0c',
    apikey: 'TODO',
    instanceType: 'c5.large'
  }
}
