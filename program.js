process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if(input !== null) {
        var instruction = input.trim();
        switch(instruction) {
            case 'ver':
                process.stdout.write(process.versions.node);
                process.exit();
                break;
            case 'lang':
                process.stdout.write(process.env.lang);
                process.exit();
            default:
                process.stderr.write('Wrong instruction!\n');
        };
    }
});