.PHONY: publish dry-publish fix-perms

# ─────────────────────────────────────────────
# Publish: result → Repo B root
# ─────────────────────────────────────────────
publish:
	@test -f .rsyncignore || (echo "ERROR: .rsyncignore not found"; exit 1)
	rsync -rv --delete \
	  --no-perms --no-owner --no-group \
	  --filter='P .rsyncignore' \
	  --exclude-from=.rsyncignore \
	  factory/result/ ./

# ─────────────────────────────────────────────
# Dry run (safe preview)
# ─────────────────────────────────────────────
dry-publish:
	@test -f .rsyncignore || (echo "ERROR: .rsyncignore not found"; exit 1)
	rsync -rv --delete --dry-run \
	  --no-perms --no-owner --no-group \
	  --filter='P .rsyncignore' \
	  --exclude-from=.rsyncignore \
	  factory/result/ ./

# ─────────────────────────────────────────────
# Fix permissions (one-time recovery helper)
# ─────────────────────────────────────────────
fix-perms:
	chmod u+rwx .
	chmod -R u+rwX .

