watchman watch-del-all && echo "Line 1 success."
# rm -rf node_modules && npm install
rm -fr $TMPDIR/react-* && echo "Line 4 清除干净"
npm start -- --reset-cache && echo "Line 5"