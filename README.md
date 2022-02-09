# resolution library

The best resolutions for any site, straight from the horse's mouth. Searchable, without ads or upselling, and sources always cited.

## Contributing

Adding new sites or updating existing ones if they fall out of date is welcomed and appreciated.

Items in `items.json` should follow this structure:

```json
{
  "name": "foobar profile banner",
  "details": {
    "minimum": "64 × 64",
    "maximum: "256 × 256 @ 5 MB"
  },
  "source": "https://foobar.com/docs/best-image-sizes/"
}
```

`name` should include the name of the site and the name of the specific property (profile image, banner, etc.) as it appears in the documentation. Searches look for matches in this field. This should always be in all lowercase.

`details` includes one or more entries for specifications as listed in the documentation. The keys are intended to be used as follows:
* `minimum` refers to the smallest acceptable dimensions as described
* `maximum` refers to the largest acceptable dimensions as described
* `recommended` refers to specific dimensions that are recommended but not required. Mutually exclusive with `required`
* `required` refers to specific dimensions that are required. Mutually exclusive with `recommended`

Some detail fields might not include dimensions. For example, it is common to have a maximum file size but no maximum dimensions.
