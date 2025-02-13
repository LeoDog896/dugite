import { GitProcess, GitError } from '../lib/'

export async function getError() {
  const branch = 'master'
  const path = 'C:/path/to/repo/'

  const result = await GitProcess.exec(['pull', 'origin', branch], path)
  if (result.exitCode !== 0) {
    const error = GitProcess.parseError(result.stderr)
    if (error) {
      if (error === GitError.HTTPSAuthenticationFailed) {
        // invalid credentials
      }
      // TODO: other scenarios
    }
  }
}
