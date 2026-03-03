/* This is the engine that fetches the websites for you */
self.__uv$config = {
    prefix: '/uv/service/',
    
    /* Using a 2026-active public bare server */
    bare: 'https://uv.student-portal.workers.dev/', 
    
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/uv/uv.handler.js',
    bundle: '/uv/uv.bundle.js',
    config: '/uv/uv.config.js',
    sw: '/uv/uv.sw.js',
};
