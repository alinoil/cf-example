export function onRequest(context) {
  let filename = context.params.filename.slice(-1)[0];

  console.log(filename);
  if (filename.endsWith('.map')) {
    console.log('IS MAP FILE, verify token');

    return new Response('SERVE MAP FILE');
  }

  return new Response('serve regular file');
}
