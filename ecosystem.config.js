module.exports = {
  apps : [{
    name: 'phone-number-next-3',
    append_env_to_name: true,
    script: './node_modules/next/dist/bin/next start -p 3000',
    max_memory_restart: '2G'
  }]
};
