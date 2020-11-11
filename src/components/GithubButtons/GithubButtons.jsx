import React from 'react';
import GitHubButton from 'react-github-btn';

const GithubButton = () => (
  <>
    <GitHubButton
      className="github-button"
      href="https://github.com/F-Sotomayor/My-Portfolio/fork"
      data-icon="octicon-repo-forked"
      data-size="large"
      data-show-count="true"
      aria-label="Fork this portfolio on GitHub"
    >
      Fork
    </GitHubButton>
    <GitHubButton
      className="github-button"
      href="https://github.com/F-Sotomayor/My-Portfolio"
      data-icon="octicon-star"
      data-size="large"
      data-show-count="true"
    >
      Star
    </GitHubButton>
  </>
);

export default GithubButton;
