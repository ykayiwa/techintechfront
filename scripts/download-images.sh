#!/bin/bash

# Download all external images from Anima CDN to local assets

cd /Users/media/workspace/techintechfront/public/assets/images

# Article images
curl -sL "https://c.animaapp.com/mmnh9bqovGnzGh/assets/m52-615x410.jpg" -o articles/hero-phone.jpg
curl -sL "https://c.animaapp.com/mmnh9bqovGnzGh/assets/m50-615x410.jpg" -o articles/emergency-sos.jpg
curl -sL "https://c.animaapp.com/mmnh9bqovGnzGh/assets/m54-615x410.jpg" -o articles/wearable-health.jpg
curl -sL "https://c.animaapp.com/mmnh9bqovGnzGh/assets/m53-860x688.jpg" -o articles/ai-content.jpg
curl -sL "https://c.animaapp.com/mmnh9bqovGnzGh/assets/m39-615x410.jpg" -o articles/covid-watch.jpg
curl -sL "https://c.animaapp.com/mmnh9bqovGnzGh/assets/m33-615x410.jpg" -o articles/brand-stories.jpg
curl -sL "https://c.animaapp.com/mmnh9bqovGnzGh/assets/m49-615x410.jpg" -o articles/platforms.jpg
curl -sL "https://c.animaapp.com/mmnh9bqovGnzGh/assets/m15-420x280.jpg" -o articles/innovation.jpg
curl -sL "https://c.animaapp.com/mmnh9bqovGnzGh/assets/m34-420x280.jpg" -o articles/persuasive.jpg
curl -sL "https://c.animaapp.com/mmnh9bqovGnzGh/assets/m36-420x280.jpg" -o articles/connections.jpg
curl -sL "https://c.animaapp.com/mmnh9bqovGnzGh/assets/m8-615x410.jpg" -o articles/fashion.jpg
curl -sL "https://c.animaapp.com/mmnh9bqovGnzGh/assets/m33-860x560.jpg" -o articles/hero-large.jpg

# Avatar images
curl -sL "https://c.animaapp.com/mmnh9bqovGnzGh/assets/m55-420x280.jpg" -o avatars/james.jpg
curl -sL "https://c.animaapp.com/mmnh9bqovGnzGh/assets/m56-420x280.jpg" -o avatars/sara.jpg
curl -sL "https://c.animaapp.com/mmnh9bqovGnzGh/assets/m57-420x280.jpg" -o avatars/marcus.jpg

# Banner images
curl -sL "https://c.animaapp.com/mmnh9bqovGnzGh/assets/banner-new.jpg" -o banners/ad-banner.jpg

# Recommended section images
curl -sL "https://c.animaapp.com/mmnh9bqovGnzGh/assets/m6-420x280.jpg" -o articles/recommended-1.jpg
curl -sL "https://c.animaapp.com/mmnh9bqovGnzGh/assets/m59-420x280.jpg" -o articles/recommended-2.jpg
curl -sL "https://c.animaapp.com/mmnh9bqovGnzGh/assets/m58-420x280.jpg" -o articles/recommended-3.jpg

# Must read images
curl -sL "https://c.animaapp.com/mmnh9bqovGnzGh/assets/m51-420x280.jpg" -o articles/mustread-1.jpg
curl -sL "https://c.animaapp.com/mmnh9bqovGnzGh/assets/m33-860x560.jpg" -o articles/mustread-2.jpg

# Icons
curl -sL "https://c.animaapp.com/mmnh9bqovGnzGh/assets/26a1.svg" -o ../icons/bolt.svg

echo "All images downloaded successfully!"
