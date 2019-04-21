import CMS from 'netlify-cms'

import BlogPostPreview from './preview-templates/BlogPostPreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'

import * as FontawesomeWidget from "netlify-cms-widget-fontawesome";
CMS.registerWidget(
  "fontawesome",
  FontawesomeWidget.Solid,
  FontawesomeWidget.Preview
);

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
