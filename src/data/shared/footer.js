/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import Link from 'components/shared/link';

const data = {
  en: {
    copyright: 'eBPF.io authors',
    maintain: {
      title: 'Maintained by the eBPF community.',
      beforeLink: 'See a bug?',
      linkTitle: 'File an issue',
    },
    content: (
      <span>
        The content of the{' '}
        <Link className="!inline font-medium" theme="white" to="/">
          ebpf.io
        </Link>{' '}
        website is licensed under a{' '}
        <Link
          className="!inline"
          theme="white"
          size="sm"
          to="https://creativecommons.org/licenses/by/4.0/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Creative Commons Attribution 4.0 International License
        </Link>
        .
      </span>
    ),
  },
  'fr-fr': {
    copyright: 'Auteurs d’eBPF.io',
    maintain: {
      title: 'Maintenu par la communauté eBPF.',
      beforeLink: 'Vous avez trouvé un bug ?',
      linkTitle: 'Reporter un problème',
    },
    content: (
      <span>
        Le contenu du site Web{' '}
        <Link className="!inline font-medium" theme="white" to="/fr-fr/">
          ebpf.io
        </Link>{' '}
        est sous{' '}
        <Link
          className="!inline"
          theme="white"
          size="sm"
          to="https://creativecommons.org/licenses/by/4.0/"
          target="_blank"
          rel="noopener noreferrer"
        >
          licence internationale Creative Commons Attribution 4.0
        </Link>
        .
      </span>
    ),
  },
  pt: {
    copyright: 'Autores eBPF.io ',
    maintain: {
      title: 'Mantido pela comunidade eBPF.',
      beforeLink: 'Viu um bug?',
      linkTitle: 'Registrar um problema ',
    },
    content: (
      <span>
        O conteúdo do site{' '}
        <Link className="!inline font-medium" theme="white" to="/pt/">
          ebpf.io
        </Link>{' '}
        está licenciado sob uma{' '}
        <Link
          className="!inline"
          theme="white"
          size="sm"
          to="https://creativecommons.org/licenses/by/4.0/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Licença Creative Commons Atribuição 4.0 Internacional
        </Link>
        .
      </span>
    ),
  },
  'pt-br': {
    copyright: 'Autores do eBPF.io',
    maintain: {
      title: 'Mantido pela comunidade do eBPF.',
      beforeLink: 'Encontrou um erro?',
      linkTitle: 'Registre um problema',
    },
    content: (
      <span>
        O conteúdo do site{' '}
        <Link className="!inline font-medium" theme="white" to="/pt-br/">
          ebpf.io
        </Link>{' '}
        está licenciado sob uma{' '}
        <Link
          className="!inline"
          theme="white"
          size="sm"
          to="https://creativecommons.org/licenses/by/4.0/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Licença Internacional Creative Commons Attribution 4.0
        </Link>
        .
      </span>
    ),
  },
  'it-it': {
    copyright: 'Autori di eBPF.io',
    maintain: {
      title: 'Mantenuto dalla community eBPF.',
      beforeLink: 'Hai notato un errore?',
      linkTitle: 'Invia una segnalazione',
    },
    content: (
      <span>
        Il contenuto del sito{' '}
        <Link className="!inline font-medium" theme="white" to="/it-it/">
          ebpf.io
        </Link>{' '}
        è sotto{' '}
        <Link
          className="!inline"
          theme="white"
          size="sm"
          to="https://creativecommons.org/licenses/by/4.0/"
          target="_blank"
          rel="noopener noreferrer"
        >
          licenza internazionale Creative Commons Attribution 4.0
        </Link>
        .
      </span>
    ),
  },
  'zh-cn': {
    copyright: 'eBPF.io 作者',
    maintain: {
      title: '由 eBPF 社区维护。',
      beforeLink: '发现一个 bug ?',
      linkTitle: '创建一个 issue',
    },
    content: (
      <span>
        <Link className="!inline font-medium" theme="white" to="/zh-cn/">
          ebpf.io
        </Link>{' '}
        网站内容基于{' '}
        <Link
          className="!inline"
          theme="white"
          size="sm"
          to="https://creativecommons.org/licenses/by/4.0/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Creative Commons Attribution 4.0 International License
        </Link>{' '}
        授权许可。
      </span>
    ),
  },
  sw: {
    copyright: 'Waandishi wa eBPF.io',
    maintain: {
      title: 'Inasimamiwa na jamii ya eBPF.',
      beforeLink: 'Ona kasoro?',
      linkTitle: 'Wasilisha suala',
    },
    content: (
      <span>
        Yaliyomo ya wavuti ya{' '}
        <Link className="!inline font-medium" theme="white" to="/">
          ebpf.io
        </Link>{' '}
        inalindwa chini ya Leseni ya{' '}
        <Link
          className="!inline"
          theme="white"
          size="sm"
          to="https://creativecommons.org/licenses/by/4.0/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Kimataifa ya Utambulisho 4.0 ya Creative Commons
        </Link>
        .
      </span>
    ),
  },
};

export default data;
