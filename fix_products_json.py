import ast
import json
import re
from pathlib import Path

INPUT_PATH = Path("assets/js/products.json")
BACKUP_PATH = INPUT_PATH.with_suffix(".json.bak")

NUMERIC_FIELDS = {"price", "oldprice", "discount", "rating"}


def to_number(value: str):
    value = value.strip()
    if re.fullmatch(r"-?\d+", value):
        return int(value)
    if re.fullmatch(r"-?\d+\.\d+", value):
        return float(value)
    return value


def normalize_value(value, key=None):
    if value is None:
        return None

    if isinstance(value, bool):
        return value

    if isinstance(value, (int, float)):
        return value

    if isinstance(value, str):
        stripped = value.strip()
        if stripped == "":
            return None

        if key in NUMERIC_FIELDS:
            return to_number(stripped)

        lowered = stripped.lower()
        if lowered == "true":
            return True
        if lowered == "false":
            return False

        return stripped

    if isinstance(value, list):
        return [normalize_value(item, key) for item in value]

    if isinstance(value, dict):
        return {k: normalize_value(v, k) for k, v in value.items()}

    return value


def ensure_unique_skus(products):
    used = set()
    for index, product in enumerate(products):
        if not isinstance(product, dict):
            continue

        raw_sku = product.get("SKU")
        if raw_sku is None:
            base = f"SKU-{index + 1}"
            sku = base
        else:
            sku = str(raw_sku).strip()
            if sku == "":
                base = f"SKU-{index + 1}"
                sku = base
            else:
                base = sku

        if sku in used:
            counter = 2
            candidate = f"{base}-{counter}"
            while candidate in used:
                counter += 1
                candidate = f"{base}-{counter}"
            sku = candidate

        used.add(sku)
        product["SKU"] = sku


def load_products(path: Path):
    text = path.read_text(encoding="utf-8")
    try:
        return json.loads(text)
    except json.JSONDecodeError:
        safe_text = text.replace("true", "True").replace("false", "False").replace("null", "None")
        return ast.literal_eval(safe_text)


def main():
    if not INPUT_PATH.exists():
        raise FileNotFoundError(f"Input file not found: {INPUT_PATH}")

    products = load_products(INPUT_PATH)
    if not isinstance(products, list):
        raise ValueError("Expected the root JSON value to be an array of products")

    normalized = [normalize_value(product) for product in products]
    ensure_unique_skus(normalized)

    if BACKUP_PATH.exists():
        BACKUP_PATH.unlink()
    INPUT_PATH.replace(BACKUP_PATH)

    INPUT_PATH.write_text(json.dumps(normalized, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    print(f"Repaired {INPUT_PATH} and created backup at {BACKUP_PATH}")
    print(f"Products processed: {len(normalized)}")
    print(f"Unique SKUs: {len({product.get('SKU') for product in normalized if isinstance(product, dict)})}")


if __name__ == "__main__":
    main()
