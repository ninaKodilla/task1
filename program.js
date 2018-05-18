process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function() {
    var input = process.stdin.read();

    (!input) ? null : switched(input);
});

function switched(input) {
    var instruction = input.trim();

    switch (instruction) {
        case 'info':
            process.stdout.write(process.versions.node);
            process.stdout.write(process.env.lang);
            process.exit();
            break;
        default:
            process.stderr.write('Wrong instruction!\n');
    };
}