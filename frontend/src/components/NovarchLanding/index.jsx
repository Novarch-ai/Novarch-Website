import React from 'react';
import './NovarchV2.css';

const CONTACT_EMAIL = 'novarch-ai@gmail.com';
const INSTAGRAM_URL = 'https://www.instagram.com/_novarch.ai/';

const mailto = (subject) =>
  `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`;

const content = {
  de: {
    lang: 'de',
    nav: ['Agent', 'Sprint', 'Für wen', 'Vision', 'Team'],
    navTargets: ['#agent', '#sprint', '#use-cases', '#vision', '#team'],
    review