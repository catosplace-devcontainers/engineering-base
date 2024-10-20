const { execSync } = require('child_process');

describe('DevContainer Tests', function () {
  this.timeout(20000);

  it('should build the DevContainer', function (done) {
    try {
      const output = execSync('npx @devcontainers/cli build --workspace-folder . .');
      console.log(output.toString());
      done();
    } catch (error) {
      done(error);
    }
  });
});