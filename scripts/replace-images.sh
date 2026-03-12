#!/bin/bash

# Replace all Anima CDN URLs with local asset paths

cd /Users/media/workspace/techintechfront/src

# Replace article images
find . -type f \( -name "*.tsx" -o -name "*.ts" \) -exec sed -i '' \
  -e 's|https://c.animaapp.com/mmnh9bqovGnzGh/assets/m52-615x410.jpg|/assets/images/articles/hero-phone.jpg|g' \
  -e 's|https://c.animaapp.com/mmnh9bqovGnzGh/assets/m50-615x410.jpg|/assets/images/articles/emergency-sos.jpg|g' \
  -e 's|https://c.animaapp.com/mmnh9bqovGnzGh/assets/m54-615x410.jpg|/assets/images/articles/wearable-health.jpg|g' \
  -e 's|https://c.animaapp.com/mmnh9bqovGnzGh/assets/m53-860x688.jpg|/assets/images/articles/ai-content.jpg|g' \
  -e 's|https://c.animaapp.com/mmnh9bqovGnzGh/assets/m39-615x410.jpg|/assets/images/articles/covid-watch.jpg|g' \
  -e 's|https://c.animaapp.com/mmnh9bqovGnzGh/assets/m33-615x410.jpg|/assets/images/articles/brand-stories.jpg|g' \
  -e 's|https://c.animaapp.com/mmnh9bqovGnzGh/assets/m49-615x410.jpg|/assets/images/articles/platforms.jpg|g' \
  -e 's|https://c.animaapp.com/mmnh9bqovGnzGh/assets/m15-420x280.jpg|/assets/images/articles/innovation.jpg|g' \
  -e 's|https://c.animaapp.com/mmnh9bqovGnzGh/assets/m34-420x280.jpg|/assets/images/articles/persuasive.jpg|g' \
  -e 's|https://c.animaapp.com/mmnh9bqovGnzGh/assets/m36-420x280.jpg|/assets/images/articles/connections.jpg|g' \
  -e 's|https://c.animaapp.com/mmnh9bqovGnzGh/assets/m8-615x410.jpg|/assets/images/articles/fashion.jpg|g' \
  -e 's|https://c.animaapp.com/mmnh9bqovGnzGh/assets/m33-860x560.jpg|/assets/images/articles/hero-large.jpg|g' \
  -e 's|https://c.animaapp.com/mmnh9bqovGnzGh/assets/m55-420x280.jpg|/assets/images/avatars/james.jpg|g' \
  -e 's|https://c.animaapp.com/mmnh9bqovGnzGh/assets/m56-420x280.jpg|/assets/images/avatars/sara.jpg|g' \
  -e 's|https://c.animaapp.com/mmnh9bqovGnzGh/assets/m57-420x280.jpg|/assets/images/avatars/marcus.jpg|g' \
  -e 's|https://c.animaapp.com/mmnh9bqovGnzGh/assets/banner-new.jpg|/assets/images/banners/ad-banner.jpg|g' \
  -e 's|https://c.animaapp.com/mmnh9bqovGnzGh/assets/m6-420x280.jpg|/assets/images/articles/recommended-1.jpg|g' \
  -e 's|https://c.animaapp.com/mmnh9bqovGnzGh/assets/m59-420x280.jpg|/assets/images/articles/recommended-2.jpg|g' \
  -e 's|https://c.animaapp.com/mmnh9bqovGnzGh/assets/m58-420x280.jpg|/assets/images/articles/recommended-3.jpg|g' \
  -e 's|https://c.animaapp.com/mmnh9bqovGnzGh/assets/m51-420x280.jpg|/assets/images/articles/mustread-1.jpg|g' \
  -e 's|https://c.animaapp.com/mmnh9bqovGnzGh/assets/26a1.svg|/assets/icons/bolt.svg|g' \
  {} \;

echo "All Anima CDN URLs replaced with local paths!"
